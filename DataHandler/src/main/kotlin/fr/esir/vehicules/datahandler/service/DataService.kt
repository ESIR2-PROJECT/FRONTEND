package fr.esir.vehicules.datahandler.service

import com.opencsv.CSVParserBuilder
import com.opencsv.CSVReaderBuilder
import org.slf4j.LoggerFactory
import org.springframework.stereotype.Service
import org.springframework.web.client.HttpServerErrorException
import java.io.BufferedInputStream
import java.io.ByteArrayInputStream
import java.io.FileOutputStream
import java.io.IOException
import java.io.InputStream
import java.io.OutputStream
import java.io.OutputStreamWriter
import java.io.StringReader
import java.lang.StringBuilder
import java.net.URL
import java.nio.channels.Channels
import java.nio.channels.ReadableByteChannel
import java.util.Scanner


@Service
class DataService {
    val logger = LoggerFactory.getLogger(DataService::class.java)
    fun getFileString(url: String): String {
        try{
            logger.info("Starting file download on $url")
            val stream = URL(url).openStream()
            val scanner = Scanner(stream, "UTF-8")

            val string = StringBuilder()

            while(scanner.hasNext()){
                string.append(scanner.nextLine()).append("\n")
            }

            logger.info("File downloaded")

            return string.toString()
        } catch(e: IOException){
            throw Exception("Error downloading $url : ${e.message}")
        }
    }
    fun getCsv(url: String, delimiter: Char): Map<String, List<String>> {
        val file = getFileString(url)

        val csvReader = CSVReaderBuilder(StringReader(file)).withCSVParser(
                CSVParserBuilder().withSeparator(delimiter).build()
        ).build()
        val lines = csvReader.readAll()

        return getDataSet(lines, delimiter)
    }

    fun getDataSet(data: List<Array<String>>, delimiter: Char): Map<String, List<String>> {
        val headers = data[0]

        logger.debug("CSV with ${headers.size} cols")

        val lists = ArrayList<ArrayList<String>>()
        for(i in headers)
            lists.add(ArrayList(data.size))

        for(i in 1 until data.size){
            val line = data[i]
            for(j in headers.indices)
                lists[j].add(line[j])
        }

        val map = HashMap<String, List<String>>()
        for(i in headers.indices){
            map[headers[i]] = lists[i]
        }

        return map
    }
}