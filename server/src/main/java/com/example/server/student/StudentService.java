package com.example.server.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class StudentService {

    private final StudentRepository studentRepository;

    @Autowired
    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public List<Student> getStudents(Student student) {
       ArrayList<Student> studentsToReturn = new ArrayList<>();
        List<Student> allStudents = studentRepository.findAll();

        for (Student s : allStudents) {
            if (s.getTeacherId() == student.getTeacherId()) {
                studentsToReturn.add(s);
            }
        }

        System.out.println("Trying to get students with the teacher with ID: " + student.getTeacherId());
        return studentsToReturn;
    }
//
//    public List<Student> getStudents(Student student) {
//        return studentRepository.findAll();
//    }

    public void addNewStudent(Student student) {
        Optional<Student> StudentOptional = studentRepository.findStudentByEmail(student.getEmail());
        if (StudentOptional.isPresent()) {
            throw new IllegalStateException("Email taken");
        }
        studentRepository.save(student);

        System.out.println(student);
    }

    public void deleteStudent(Long studentId) {
        boolean exists = studentRepository.existsById(studentId);
        if (!exists) {
            throw new IllegalStateException("Student with id " + studentId + " does not exist");
        }
        studentRepository.deleteById(studentId);
    }

    @Transactional
    public void updateStudent(Long studentId, String name, String email) {
        Student student = studentRepository.findById(studentId)
                .orElseThrow(() -> new IllegalStateException(
                        "Student with id " + studentId + " does not exist"
                ));

        if (name != null
                && name.length() > 0
                && !Objects.equals(student.getName(), name)) {
            student.setName(name);
        }

        if (email != null
                && email.length() > 0
                && !Objects.equals(student.getEmail(), email)) {
            Optional<Student> StudentOptional = studentRepository.findStudentByEmail(email);
            if (StudentOptional.isPresent()) {
                throw new IllegalStateException("Email taken on Update");
            }
            student.setEmail(email);
        }
    }
}
