package com.bepp.bepairprograming.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;
import java.time.LocalDate;

@Setter
@Getter
@AllArgsConstructor
public class ExceptionDetails {

    private String msg;
    private LocalDate timestamp;
    private HttpStatus status;
}
