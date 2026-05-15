package com.example.easycotas.repository;

import com.example.easycotas.model.Usuario;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository
        extends JpaRepository<Usuario, Long> {
}