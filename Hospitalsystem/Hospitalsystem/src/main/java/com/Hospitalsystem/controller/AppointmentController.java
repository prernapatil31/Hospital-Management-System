package com.Hospitalsystem.controller;

import com.Hospitalsystem.dto.AppointmentRequest;
import com.Hospitalsystem.model.Appointment;
import com.Hospitalsystem.model.Doctor;
import com.Hospitalsystem.model.Patient;
import com.Hospitalsystem.service.AppointmentService;
import com.Hospitalsystem.service.DoctorService;
import com.Hospitalsystem.service.PatientService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.ArrayList;

@RestController
@RequestMapping("/appointments")
@CrossOrigin("*")
public class AppointmentController {

    @Autowired
    AppointmentService service;

    @Autowired
    DoctorService doctorService;

    @Autowired
    PatientService patientService;

    @GetMapping
    public List<Appointment> getAll(){
        return service.getAll();
    }

    @PostMapping
    public Appointment add(@RequestBody AppointmentRequest req){

        Patient patient = patientService.findByName(req.getPatientName());

        if(patient == null){
            throw new RuntimeException("Patient not found. Please add patient first.");
        }

        Doctor doctor = doctorService.getById(req.getDoctorId());

        Appointment a = new Appointment();
        a.setPatient(patient);
        a.setDoctor(doctor);
        a.setDate(req.getDate());

        return service.save(a);
    }

    @PostMapping("/appointmentbulk")
    public List<Appointment> addBulk(@RequestBody List<AppointmentRequest> requests){

        List<Appointment> list = new ArrayList<>();

        for(AppointmentRequest req : requests){

            Patient patient = patientService.findByName(req.getPatientName());

            if(patient == null){
                throw new RuntimeException("Patient not found: " + req.getPatientName());
            }

            Doctor doctor = doctorService.getById(req.getDoctorId());

            Appointment a = new Appointment();
            a.setPatient(patient);
            a.setDoctor(doctor);
            a.setDate(req.getDate());

            list.add(a);
        }

        return service.saveAll(list);
    }
}