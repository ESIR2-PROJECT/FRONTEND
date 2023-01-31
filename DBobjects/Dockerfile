FROM maven:3.8.5-openjdk-17 AS dev

WORKDIR /app
COPY pom.xml .
RUN mvn dependency:resolve

CMD ["mvn", "package"]