package com.appoint.repository;

import com.appoint.entity.InputFile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FileRepository extends JpaRepository<InputFile, Long> {
}