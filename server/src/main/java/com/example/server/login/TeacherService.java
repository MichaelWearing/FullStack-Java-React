package com.example.server.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TeacherService {

    private final TeacherRepository teacherRepository;

    @Autowired
    public TeacherService(TeacherRepository teacherRepository) {
        this.teacherRepository = teacherRepository;
    }

    public List<Teacher> getStudents() {
        return teacherRepository.findAll();
    }

    public void addNewTeacher(Teacher teacher) {
        Optional<Teacher> TeacherOptional = teacherRepository.findTeacherByEmail(teacher.getEmail());
        if (TeacherOptional.isPresent()) {
            throw new IllegalStateException("Email taken");
        }
        teacherRepository.save(teacher);

        System.out.println(teacher);
    }

    public Object authenticateTeacher(Teacher teacher) {
        List<Teacher> allTeachers = teacherRepository.findAll();
        for (Teacher t : allTeachers) {
           if (t.getEmail().equals(teacher.getEmail()) &&
                   t.getPassword().equals(teacher.getPassword())) {
               return t;
           }
        }
        // Find a way to better handle a failed login
        throw new IllegalStateException("Incorrect Login Details");
    }
}
