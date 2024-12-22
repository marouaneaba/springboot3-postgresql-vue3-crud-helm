FROM openjdk:17-jdk-slim as builder
ARG JAR_FILE=./spring-boot3-crud-application/target/*.jar
COPY ${JAR_FILE} app.jar

FROM openjdk:17-jdk-slim
ENV TZ Europe/Paris



COPY --from=builder /app.jar /app.jar
EXPOSE 8080

ARG JAR_FILE=./spring-boot3-crud-application/target/*.jar
COPY ${JAR_FILE} spring-boot3-crud-application.jar


RUN install -d -m 0755 -o 2020 -g 0 /gc && \
    install -d -m 0755 -o 2020 -g 0 /dump


ENTRYPOINT ["java", "-jar", "/app.jar"]
