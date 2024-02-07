package com.bepp.bepairprograming.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import java.util.Date;

@ControllerAdvice
public class ExceptionHandler extends  RuntimeException {

    @org.springframework.web.bind.annotation.ExceptionHandler(InternalServerException.class)
    public ResponseEntity handleInternalServerException(InternalServerException exception, HttpStatus status){
        ExceptionDetails details =new ExceptionDetails(exception.getMessage(), new Date(),status);
        return new ResponseEntity(details,HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @org.springframework.web.bind.annotation.ExceptionHandler(NegativeValueException.class)
    public ResponseEntity<String> handleNegativeValueException(NegativeValueException ex) {
        ExceptionDetails details = new ExceptionDetails(ex.getMessage(),new Date(),HttpStatus.BAD_REQUEST);
        return new ResponseEntity(details,HttpStatus.BAD_REQUEST);
    }
}
