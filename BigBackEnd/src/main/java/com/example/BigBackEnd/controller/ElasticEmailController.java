package com.example.BigBackEnd.controller;

import com.example.BigBackEnd.entity.Email;
import org.springframework.web.bind.annotation.*;

import java.io.*;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLEncoder;
import java.util.Random;

@RestController
@CrossOrigin
@RequestMapping("/elastic/email")
public class ElasticEmailController {
    static String APIKEY = "FE46416FD25719F2FD282706DF5088D73B68C805E78007E9BDB0EF9D4083563DE8A4775FA076592203B91A5C019528DE";
    static String SUBJECT = "OTP For SignUp";
    static int globalOtp;

    private int randomNumber() {
        Random random = new Random();
       return random.nextInt(900000) + 100000;

    }
    private int randomNumber;
    @PostMapping("/send")
    public String SendEmail(@RequestBody Email email) {
        try {

            randomNumber = randomNumber();

            String BODY_TEXT = "you have request for an OTP for signing in. \nHere is your OTP \n\n" + randomNumber + "\n\n Copy it and get access";
            String encoding = "UTF-8";

            String data = "apikey=" + URLEncoder.encode(APIKEY, encoding);
            data += "&from=" + URLEncoder.encode("surajbade39.sb@gmail.com", encoding);
            data += "&fromName=" + URLEncoder.encode("suraj Bade", encoding);
            data += "&subject=" + URLEncoder.encode(SUBJECT, encoding);
            data += "&bodyText=" + URLEncoder.encode(BODY_TEXT, encoding);
            data += "&to=" + URLEncoder.encode(email.getEmailTo(), encoding);
            data += "&isTransactional=" + URLEncoder.encode("false", encoding);

            System.out.println(data);

            URL url = new URL("https://api.elasticemail.com/v2/email/send");
            URLConnection conn = url.openConnection();
            conn.setDoOutput(true);
            OutputStreamWriter wr = new OutputStreamWriter(conn.getOutputStream());
            wr.write(data);
            wr.flush();
            BufferedReader rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            String result = rd.readLine();
            wr.close();
            rd.close();

            return result;
        } catch (Exception e) {
            e.printStackTrace();
            return "Enable to send Email";
        }
    }

    @GetMapping("/otp")
    public int otpGen() {
        try {
            System.out.println("otp= " + randomNumber);
            return randomNumber;
        } catch (Exception e) {
            e.printStackTrace();
            return -1;
        }
    }
}

