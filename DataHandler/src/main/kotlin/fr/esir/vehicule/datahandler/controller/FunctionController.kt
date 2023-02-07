package fr.esir.vehicule.datahandler.controller

import com.github.doyaaaaaken.kotlincsv.dsl.csvReader
import fr.esir.vehicule.datahandler.service.DataService
import org.springframework.core.io.buffer.DataBuffer
import org.springframework.core.io.buffer.DataBufferUtils
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono
import java.io.InputStream
import java.io.InputStreamReader
import java.io.PipedInputStream
import java.io.PipedOutputStream
import java.nio.charset.StandardCharsets


@RestController
class FunctionController(private final val dataService: DataService) {
    @GetMapping("/getData")
    fun getData(): Mono<String> {
        val flux: Flux<DataBuffer> = dataService.getData()
        flux.map { dataBuffer: DataBuffer ->
            val inputStream: InputStream = dataBuffer.asInputStream()
            csvReader().open(inputStream) {
                readAllWithHeaderAsSequence().forEach { row ->
                    println(row)
                }
            }
        }
        return Mono.just("ok");
    }


}