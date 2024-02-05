package com.bepp.bepairprograming.exception;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class InternalServerException extends RuntimeException {
    public InternalServerException(String msg){
        super(msg);
    }
}
