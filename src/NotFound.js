import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404</h1>
      <p>Halaman yang Anda cari tidak ditemukan.</p>
      <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
        Kembali ke Beranda
      </Link>
    </div>
  );
};

export default NotFound;
