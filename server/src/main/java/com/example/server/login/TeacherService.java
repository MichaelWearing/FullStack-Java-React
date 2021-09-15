package com.example.server.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
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
}
