package com.bepp.bepairprograming.serviceImpl;

import com.bepp.bepairprograming.dto.RequestDto;
import com.bepp.bepairprograming.dto.ResponseDto;
import com.bepp.bepairprograming.entity.Cart;
import com.bepp.bepairprograming.repository.CartRepository;
import com.bepp.bepairprograming.service.CartService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartServiceImpl implements CartService {

    private CartRepository cartRepository;
   private ModelMapper modelMapper;
   @Autowired
   public CartServiceImpl(CartRepository cartRepository,ModelMapper modelMapper){
        this.cartRepository=cartRepository;
        this.modelMapper=modelMapper;
    }

    @Override
    public ResponseDto addItemToCart(RequestDto newItem) {
        Cart  cart = modelMapper.map(newItem,Cart.class);
        Cart newitem = cartRepository.save(cart);
        return modelMapper.map(newitem, ResponseDto.class);
    }
}
