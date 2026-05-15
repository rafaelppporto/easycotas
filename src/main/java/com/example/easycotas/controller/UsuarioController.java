package com.example.easycotas.controller;

import com.example.easycotas.model.Usuario;
import com.example.easycotas.repository.UsuarioRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioRepository repository;

    @PostMapping
    public Usuario cadastrar(@RequestBody Usuario usuario) {

        Usuario salvo = repository.save(usuario);

        System.out.println("Usuário salvo:");
        System.out.println(salvo.getNome());

        return salvo;
    }
}