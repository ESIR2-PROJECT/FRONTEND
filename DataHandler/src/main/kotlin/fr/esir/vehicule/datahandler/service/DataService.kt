package fr.esir.vehicule.datahandler.service

import io.netty.handler.ssl.SslContextBuilder
import io.netty.handler.ssl.util.InsecureTrustManagerFactory
import org.springframework.core.io.buffer.DataBuffer
import org.springframework.http.client.reactive.ReactorClientHttpConnector
import org.springframework.stereotype.Service
import org.springframework.web.reactive.function.client.WebClient
import org.springframework.web.reactive.function.client.bodyToMono
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono
import reactor.netty.http.client.HttpClient


@Service
class DataService {
    val client = WebClient.builder().clientConnector(ReactorClientHttpConnector(
        HttpClient
            .create()
            .followRedirect(true)
            .secure { t -> t.sslContext(
            SslContextBuilder
                .forClient()
                .trustManager(InsecureTrustManagerFactory.INSTANCE)
                .build()
        ) }
    )).build();

    fun getData(): Flux<DataBuffer> {
        return client.get()
            .uri("https://www.data.gouv.fr/fr/datasets/r/8d9398ae-3037-48b2-be19-412c24561fbb")
            .retrieve()
            .bodyToFlux(DataBuffer::class.java)
    }
}