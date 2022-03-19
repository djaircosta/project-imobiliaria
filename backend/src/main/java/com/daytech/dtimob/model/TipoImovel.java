package com.daytech.dtimob.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "tipoimovel")
@SequenceGenerator(name = "seq_tipoimovel", sequenceName = "seq_tipoimovel", allocationSize = 1, initialValue = 1)

public class TipoImovel {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_tipoimovel")

    private Long id;

    @Column(name = "nome_desc", nullable = false)
    private String nomeDesc;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNomeDesc() {
        return nomeDesc;
    }

    public void setNomeDesc(String nomeDesc) {
        this.nomeDesc = nomeDesc;
    }

}
