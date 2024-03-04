package com.bepp.bepairprograming.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;
import java.util.Date;

@Setter
@Getter
@AllArgsConstructor
public class ExceptionDetails {

    private String msg;
    private Date date;
    private HttpStatus status;
}
