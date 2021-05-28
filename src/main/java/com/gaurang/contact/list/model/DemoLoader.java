package com.gaurang.contact.list.model;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DemoLoader implements CommandLineRunner{
    private final ContactRepository repository;

    @Autowired
    public DemoLoader(ContactRepository repository){
        this.repository = repository;
    }

    @Override
    public void run(String... args) throws Exception {
        // TODO Auto-generated method stub
        this.repository.save(new Contact("Gaurang", "Suki", "****@gmail.com"));
    }

}