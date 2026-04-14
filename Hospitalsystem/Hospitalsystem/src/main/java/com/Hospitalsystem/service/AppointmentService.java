package com.Hospitalsystem.service;

import com.Hospitalsystem.model.Appointment;
import com.Hospitalsystem.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppointmentService {

    @Autowired
    AppointmentRepository repo;

    public List<Appointment> getAll(){ return repo.findAll(); }
    public Appointment save(Appointment a){ return repo.save(a); }
    public List<Appointment> saveAll(List<Appointment> list){
        return repo.saveAll(list);
    }
}
