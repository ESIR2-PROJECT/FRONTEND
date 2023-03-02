FROM maven:3.8.5-openjdk-17 AS build
WORKDIR /app
COPY pom.xml .
COPY lib/ lib/
RUN mvn org.apache.maven.plugins:maven-install-plugin:2.5.2:install-file -Dfile=lib/dbobjects.jar
RUN mvn dependency:resolve
COPY src src
RUN mvn package -DskipTests

FROM openjdk:17 AS prod
WORKDIR /app
COPY --from=build /app/target/api-0.0.1-SNAPSHOT.jar app.jar

CMD ["java", "-jar", "-Dspring.profiles.active=prod", "app.jar"]