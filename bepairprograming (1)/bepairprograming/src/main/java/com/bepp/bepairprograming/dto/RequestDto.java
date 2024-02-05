package com.bepp.bepairprograming.dto;

import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NonNull;

@Getter
@AllArgsConstructor
public class RequestDto {
    @NonNull
    private  String name;
    @Positive
    private  Long cost;
    @Positive
    private  Long qantity;
}
