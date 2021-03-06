package com.example.server.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/teacher")
public class TeacherController {

    private final TeacherService teacherService;

    @Autowired
    public TeacherController(TeacherService teacherService) {
        this.teacherService = teacherService;
    }

    @GetMapping
    public List<Teacher> getTeachers() {
        return teacherService.getStudents();
    }

    @PostMapping
    public void createNewTeacher(@RequestBody Teacher teacher) {
        teacherService.addNewTeacher(teacher);
    }

    @PostMapping(path = "/login")
    public Object authenticateTeacher(@RequestBody Teacher teacher) {
       return teacherService.authenticateTeacher(teacher);
    }
}
