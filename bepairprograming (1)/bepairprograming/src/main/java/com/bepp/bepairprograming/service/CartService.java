package com.bepp.bepairprograming.service;

import com.bepp.bepairprograming.dto.RequestDto;
import com.bepp.bepairprograming.dto.ResponseDto;
import org.springframework.http.ResponseEntity;

public interface CartService {
     ResponseDto addItemToCart(RequestDto newItem);
}
