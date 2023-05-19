package com.example.BigBackEnd.entity;

import lombok.Data;

@Data

public class Email {

    private String to;
    private String subject;
    private String bodyText;

}
