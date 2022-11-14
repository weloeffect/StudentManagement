package com.studentSystem.studentSystem.controller;

import com.studentSystem.studentSystem.model.Student;
import com.studentSystem.studentSystem.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
@CrossOrigin
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping("/add")
    public String addStudent(@RequestBody Student student){
        studentService.saveStudent(student);
        return "new student added";

    }
    @GetMapping("/getAll")
    public List<Student> getStudents(){
        return studentService.getStudents();
    }
}
