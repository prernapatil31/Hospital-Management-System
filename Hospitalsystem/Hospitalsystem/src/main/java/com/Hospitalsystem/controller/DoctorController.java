package com.Hospitalsystem.controller;

import com.Hospitalsystem.model.Doctor;
import com.Hospitalsystem.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/doctors")
@CrossOrigin("*")
public class DoctorController {

    @Autowired
    DoctorService service;

    @GetMapping
    public List<Doctor> getAll(){ return service.getAll(); }

    @PostMapping
    public Doctor add(@RequestBody Doctor d){ return service.save(d); }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){ service.delete(id); }

    @PostMapping("/bulk")
    public List<Doctor> addAll(@RequestBody List<Doctor> doctors){
        return service.saveAll(doctors);
    }

}
