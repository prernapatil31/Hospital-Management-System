package com.Hospitalsystem.dto;

import lombok.Data;

@Data
public class AppointmentRequest {
    private String patientName;
    private Long doctorId;
    private String date;

}
