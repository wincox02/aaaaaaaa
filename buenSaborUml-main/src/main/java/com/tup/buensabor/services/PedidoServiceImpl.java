package com.tup.buensabor.services;

import com.tup.buensabor.dtos.PedidoDTO;
import com.tup.buensabor.entities.ArticuloManufacturado;
import com.tup.buensabor.entities.Domicilio;
import com.tup.buensabor.entities.Pedido;
import com.tup.buensabor.repositories.ArticuloManufacturadoRepository;
import com.tup.buensabor.repositories.BaseRepository;
import com.tup.buensabor.repositories.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class PedidoServiceImpl extends BaseServiceImpl<Pedido, Long> implements PedidoService {

    @Autowired
    private PedidoRepository pedidoRepository;

    public PedidoServiceImpl(BaseRepository<Pedido,Long> baseRepository){
        super(baseRepository);
    }


    public Page<Pedido> search(String filtro, Pageable pageable) throws Exception{
        try {
            Page<Pedido> pedidos = pedidoRepository.search(filtro, pageable);
            return pedidos;
        }catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

    public Page<Pedido> searchEstado(String filtro, Pageable pageable) throws Exception{
        try {
            Page<Pedido> pedidos = pedidoRepository.searchEstado(filtro, pageable);
            return pedidos;
        }catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }
/*
 @Override
    public Page<PedidoDTO> pedidoCliente(Date desde, Date hasta, Pageable pageable) throws Exception {
        try {
            Page<Pedido> pedidoCliente = pedidoRepository.pedidoCliente(desde, hasta, pageable);

            List<PedidoDTO> listaRankings = new ArrayList<>();

            for (Pedido pedido : pedidoCliente) {
                PedidoDTO pedidoDTO = new PedidoDTO();
                pedidoDTO.setId(pedido.getId());
                pedidoDTO.sefecha(pedido.getfechaPedido());
                pedidoDTO.settotal(pedido.gettotal());
                listaRankings.add(pedidoDTO);
            }
            Page<PedidoDTO> pedidos = new PageImpl<>(listaRankings, pedidoCliente.getPageable(), pedidoCliente.getTotalElements());
            return pedidos;
        }catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }
    */


}
