FROM maven:3.8.5-openjdk-17 AS build
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:resolve
COPY . .
RUN mvn package

FROM openjdk:17 AS prod
WORKDIR /app
COPY --from=build /app/target/api-0.0.1-SNAPSHOT.jar /root/.m2/repository/fr/esir/vehicules/...........