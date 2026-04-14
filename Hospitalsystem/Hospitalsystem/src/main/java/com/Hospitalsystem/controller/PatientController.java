package com.Hospitalsystem.controller;

import com.Hospitalsystem.model.Patient;
import com.Hospitalsystem.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/patients")
@CrossOrigin("*")
public class PatientController {

    @Autowired PatientService service;

    @GetMapping
    public List<Patient> getAll(){ return service.getAll(); }

    @PostMapping
    public Patient add(@RequestBody Patient p){ return service.save(p); }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){ service.delete(id); }

    @PostMapping("/patientbulk")
    public List<Patient> addBulk(@RequestBody List<Patient> patients){
        return service.saveAll(patients);
    }
}
