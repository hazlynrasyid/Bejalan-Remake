<!-- # React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
``` -->

# Bejalan ✈️

**Bejalan** adalah sebuah platform website pemesanan travel yang dirancang untuk memudahkan pengguna menemukan destinasi, memesan paket liburan, dan mengelola perjalanan mereka dengan efisien.

---

## Daftar Isi

* [Fitur Utama](#fitur-utama)
* [Teknologi](#teknologi)
* [Instalasi](#instalasi)
* [Cara Penggunaan](#cara-penggunaan)
* [Kontribusi](#kontribusi)
* [Lisensi](#lisensi)

---

## Fitur Utama

Fitur-fitur utama yang ada di platform "Bejalan":

* 🔎 **Pencarian Destinasi:** Pengguna dapat mencari tempat wisata atau paket perjalanan berdasarkan lokasi, tanggal, atau kategori.
* 📦 **Pemesanan Paket:** Sistem pemesanan terintegrasi untuk paket liburan, hotel, dan tiket.
* 👤 **Manajemen Profil:** Pengguna dapat mendaftar, login, dan mengelola profil serta riwayat pemesanan mereka.
* 💳 **Gateway Pembayaran:** (Jika ada) Integrasi dengan gateway pembayaran untuk transaksi yang aman.
* 📖 **Blog & Artikel:** (Opsional) Artikel dan tips seputar dunia traveling.
