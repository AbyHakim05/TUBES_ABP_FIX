# Admin Setup Guide

## Panduan Setup Admin LPK Mugiwara

### 1. Buat Tabel Admin Requests di Supabase

1. Buka [Supabase Dashboard](https://app.supabase.com)
2. Pilih project Anda
3. Buka **SQL Editor**
4. Copy dan jalankan query dari file `SETUP_ADMIN.sql`

### 2. Buat Admin Pertama

Opsi 1: **Menggunakan Supabase Dashboard (Paling Cepat)**
- Daftar akun baru melalui aplikasi
- Buka Supabase Dashboard → Authentication → Users
- Cari user yang baru terdaftar
- Klik user tersebut
- Buka tab "User Metadata"
- Edit JSON-nya dan ubah `"role"` menjadi `"admin"`:
  ```json
  {
    "nama": "Nama Anda",
    "domisili": "Kota",
    "role": "admin"
  }
  ```
- Klik **Save**
- User akan otomatis redirect ke `/admin/dashboard` saat login berikutnya

Opsi 2: **Menggunakan SQL**
```sql
UPDATE auth.users
SET user_metadata = jsonb_set(user_metadata, '{role}', '"admin"')
WHERE email = 'your-email@example.com';
```

### 3. Fitur Admin yang Sudah Ditambahkan

✅ **Logout Button yang Diperbaiki**
- Tombol logout sekarang memiliki styling yang lebih baik
- Menampilkan icon 🚪 dan animasi hover
- Ada 2 varian: `default` (abu-abu) dan `danger` (merah)

✅ **Role-based Redirect**
- Admin otomatis masuk ke `/admin/dashboard`
- Peserta masuk ke `/dashboard`
- User yang sudah login tidak bisa akses halaman `/auth`

✅ **Admin Management Page**
- Akses di `/admin/pengaturan`
- Menampilkan daftar admin
- Tempat untuk mengelola admin requests (fitur permintaan akan dibuat lebih dinamis)

✅ **Admin Request Panel**
- Peserta bisa meminta akses admin di halaman `/lainnya`
- Klik tombol "Minta Akses Admin"
- Jelaskan alasan dan tunggu review dari super admin

### 4. Struktur Role

Saat ini ada 2 role utama:
- **peserta**: User biasa, akses `/dashboard`, `/kelas-saya`, dll
- **admin**: Admin panel, akses `/admin/dashboard`, `/admin/data-peserta`, dll

### 5. Testing

**Test Login sebagai Admin:**
1. Buat akun baru via register
2. Ubah rolenya ke `admin` di Supabase
3. Login dengan akun tersebut
4. Seharusnya langsung masuk ke `/admin/dashboard`

**Test Logout:**
1. Login sebagai user manapun
2. Buka `/pengaturan` atau `/lainnya`
3. Klik tombol logout merah "Hapus Akun"
4. Seharusnya logout dan kembali ke `/auth`

**Test Admin Request:**
1. Login sebagai peserta biasa
2. Buka halaman `/lainnya`
3. Klik "Minta Akses Admin"
4. Isi alasan (minimal 10 karakter)
5. Permintaan akan disimpan di tabel `admin_requests`

### 6. Navigasi Admin

Admin bisa mengakses:
- `/admin/dashboard` - Dashboard dengan statistik
- `/admin/data-peserta` - Daftar peserta terdaftar
- `/admin/program-materi` - Kelola program (belum ada isinya)
- `/admin/pengaturan` - Manajemen admin dan permintaan

### 7. Logout Button Variants

Di kode, gunakan:

```tsx
// Default logout button (abu-abu)
<LogoutButton />

// Danger logout button (merah)
<LogoutButton variant="danger" />

// Tanpa icon
<LogoutButton showIcon={false} />

// Keduanya bersama
<LogoutButton variant="danger" showIcon={true} />
```

### 8. Troubleshooting

**Q: Tombol logout tidak bekerja?**
- Pastikan supabase client sudah ter-setup dengan benar
- Cek di browser console apakah ada error
- Coba clear browser cache dan login ulang

**Q: Admin request table tidak ada?**
- Jalankan SQL setup script di Supabase SQL Editor
- Pastikan tidak ada error saat menjalankan query

**Q: User tidak bisa jadi admin?**
- Pastikan role di user_metadata sudah "admin" (case-sensitive)
- Coba refresh halaman atau login ulang
- Cek di Supabase Dashboard bahwa metadata sudah terubah

---

**Created**: 20 Apr 2026
**Last Updated**: 20 Apr 2026
