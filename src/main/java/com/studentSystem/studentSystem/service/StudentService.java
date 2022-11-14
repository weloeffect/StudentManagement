package com.studentSystem.studentSystem.service;

import com.studentSystem.studentSystem.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getStudents();
}