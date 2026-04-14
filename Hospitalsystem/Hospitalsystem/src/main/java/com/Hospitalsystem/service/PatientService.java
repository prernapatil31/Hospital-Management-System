package com.Hospitalsystem.service;

import com.Hospitalsystem.model.Patient;
import com.Hospitalsystem.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientService {

    @Autowired
    PatientRepository repo;

    public List<Patient> getAll(){
        return repo.findAll();
    }

    public Patient save(Patient p){
        return repo.save(p);
    }

    public void delete(Long id){
        repo.deleteById(id);
    }

    public List<Patient> saveAll(List<Patient> patients){
        return repo.saveAll(patients);
    }

    public Patient findByName(String name){
        List<Patient> list = repo.findByName(name);
        return list.isEmpty() ? null : list.get(0);
    }
}