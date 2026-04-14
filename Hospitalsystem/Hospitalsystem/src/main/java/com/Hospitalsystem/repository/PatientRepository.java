package com.Hospitalsystem.repository;


import com.Hospitalsystem.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface  PatientRepository extends JpaRepository<Patient, Long> {
    List<Patient> findByName(String name);
}
