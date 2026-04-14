package com.Hospitalsystem.service;

import com.Hospitalsystem.model.Doctor;
import com.Hospitalsystem.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorService {

    @Autowired
    DoctorRepository repo;

    public List<Doctor> getAll(){ return repo.findAll(); }

    public Doctor save(Doctor d){ return repo.save(d); }

    public void delete(Long id){ repo.deleteById(id); }

    public List<Doctor> saveAll(List<Doctor> doctors){
        return repo.saveAll(doctors);
    }

    public Doctor getById(Long id){
        return repo.findById(id).orElse(null);
    }
}