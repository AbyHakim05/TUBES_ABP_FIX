-- Buat tabel admin_requests untuk menampung permintaan akses admin
CREATE TABLE admin_requests (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id),
  email TEXT NOT NULL,
  reason TEXT NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  requested_at TIMESTAMP DEFAULT now(),
  reviewed_at TIMESTAMP,
  reviewed_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP DEFAULT now()
);

-- Tambahkan index untuk performa query
CREATE INDEX idx_admin_requests_user_id ON admin_requests(user_id);
CREATE INDEX idx_admin_requests_status ON admin_requests(status);

-- RLS (Row Level Security) - Hanya admin yang bisa melihat semua requests, user lain hanya request milik mereka
ALTER TABLE admin_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own admin requests"
  ON admin_requests FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all admin requests"
  ON admin_requests FOR SELECT
  USING (auth.jwt() ->> 'user_metadata' -> 'role' = 'admin');

CREATE POLICY "Users can insert admin requests"
  ON admin_requests FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Admins can update admin requests"
  ON admin_requests FOR UPDATE
  USING (auth.jwt() ->> 'user_metadata' -> 'role' = 'admin');

-- OPTIONAL: Script untuk membuat akun admin pertama (ganti dengan email Anda)
-- Jalankan ini SETELAH membuat user melalui register form
-- UPDATE auth.users
-- SET user_metadata = jsonb_set(user_metadata, '{role}', '"admin"')
-- WHERE email = 'your-email@example.com';
