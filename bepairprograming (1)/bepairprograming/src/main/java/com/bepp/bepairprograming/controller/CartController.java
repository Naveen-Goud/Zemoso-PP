package com.bepp.bepairprograming.controller;

import com.bepp.bepairprograming.dto.RequestDto;
import com.bepp.bepairprograming.dto.ResponseDto;
import com.bepp.bepairprograming.exception.NegativeValueException;
import com.bepp.bepairprograming.service.CartService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api/cart")
@RestController
public class CartController {
    private CartService cartService;

    @Autowired
    private  CartController(CartService cartService){
        this.cartService=cartService;
    }

    @PostMapping("/")
    public ResponseEntity<ResponseDto> addToCart(@Valid @RequestBody RequestDto newItem, BindingResult bindingResult){
        if (bindingResult.hasErrors()) {
            throw new NegativeValueException("Values cannot be negative");
        }
        return ResponseEntity.ok(cartService.addItemToCart(newItem));
    }
}
