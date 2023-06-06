package com.example.demo;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.beans.factory.annotation.Qualifier;

@Repository
@Qualifier("users-datasource")
public interface UserDAO extends CrudRepository<User, String> {

    @Query("SELECT * FROM users WHERE id = :username")
    User findByUser(String username);
}