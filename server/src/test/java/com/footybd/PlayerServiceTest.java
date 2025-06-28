package com.footybd;

import com.footybd.entity.Player;
import com.footybd.repository.PlayerRepository;
import com.footybd.service.PlayerService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@SpringBootTest
class PlayerServiceTest {
    @Mock
    private PlayerRepository playerRepository;

    @InjectMocks
    private PlayerService playerService;

    @Test
    void testGetPlayerById() {
        Player player = new Player();
        player.setId(1L);
        player.setName("Test Player");

        when(playerRepository.findById(1L)).thenReturn(Optional.of(player));

        Player found = playerService.getPlayerById(1L);

        assertEquals(player.getName(), found.getName());
    }
}