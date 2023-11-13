package com.tup.buensabor.services;


import com.tup.buensabor.entities.Cliente;
import com.tup.buensabor.repositories.BaseRepository;
import com.tup.buensabor.repositories.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClienteServiceImpl extends BaseServiceImpl<Cliente, Long> implements ClienteService{

    @Autowired
    private ClienteRepository clienteRepository;

    public ClienteServiceImpl(BaseRepository<Cliente, Long>baseRepository){
        super(baseRepository);
    }
}
