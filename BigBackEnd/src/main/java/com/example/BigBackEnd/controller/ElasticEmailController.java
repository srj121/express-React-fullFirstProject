package com.example.BigBackEnd.controller;

import com.example.BigBackEnd.entity.Email;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.*;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLEncoder;

@RestController
public class ElasticEmailController {
    static String APIKEY = "FE46416FD25719F2FD282706DF5088D73B68C805E78007E9BDB0EF9D4083563DE8A4775FA076592203B91A5C019528DE";


    @PostMapping("/send")
    public String SendEmail(@RequestBody Email email) throws IOException {
        try {
            String encoding = "UTF-8";

            String data = "apikey=" + URLEncoder.encode(APIKEY, encoding);
            data += "&from=" + URLEncoder.encode("surajbade39.sb@gmail.com", encoding);
            data += "&fromName=" + URLEncoder.encode("suraj Bade", encoding);
            data += "&subject=" + URLEncoder.encode(email.getSubject(), encoding);
            data += "&bodyText=" + URLEncoder.encode(email.getBodyText(), encoding);
            data += "&to=" + URLEncoder.encode(email.getTo(), encoding);
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
}

