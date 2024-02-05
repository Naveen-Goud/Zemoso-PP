package com.bepp.bepairprograming.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import java.time.LocalDate;

@ControllerAdvice
public class ExceptionHandler extends  RuntimeException {

    @org.springframework.web.bind.annotation.ExceptionHandler(InternalServerException.class)
    public ResponseEntity handleInternalServerException(InternalServerException exception, HttpStatus status){
        ExceptionDetails details =new ExceptionDetails(exception.getMessage(), LocalDate.now(),status);
        return new ResponseEntity(details,HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
