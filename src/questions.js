const questions = [
    {
        question: "Was ist Apache Spark?",
        options: ["Apache Spark ist eine Programmiersprache.", "Apache Spark ist ein Framework für verteilte Datenverarbeitung.", "Apache Spark ist ein Webserver.", "Apache Spark ist eine Datenbanktechnologie."],
        answer: "Apache Spark ist ein Framework für verteilte Datenverarbeitung."
    },
    {
        question: "Welche Komponenten umfassen das Apache Spark Ökosystem?",
        options: ["Spark SQL, Spark Streaming, MLlib, GraphX", "Spark SQL, Spark Core, Spark Streaming", "Spark Core, Apache Kafka, GraphX", "Spark SQL, MLlib, Apache Flink"],
        answer: "Spark SQL, Spark Streaming, MLlib, GraphX"
    },
    {
        question: "Was ist der Unterschied zwischen einem RDD (Resilient Distributed Dataset) und einem DataFrame?",
        options: ["RDD ist schneller, DataFrame benötigt mehr Speicher.", "DataFrame ist eine höhere Abstraktion und optimiert die Datenverarbeitung.", "RDD ist für strukturierte Daten, DataFrame für unstrukturierte Daten.", "DataFrame ist eine spezielle Version von RDD."],
        answer: "DataFrame ist eine höhere Abstraktion und optimiert die Datenverarbeitung."
    },
    {
        question: "Welche Programmiersprachen werden von Apache Spark unterstützt?",
        options: ["Java, Scala, Python, R, SQL", "Java, C++, Python", "Scala, Ruby, Go", "Java, SQL, C#"],
        answer: "Java, Scala, Python, R, SQL"
    },
    {
        question: "Was ist der SparkContext, und welche Rolle spielt er?",
        options: ["Es ist der Hauptspeicher des Clusters.", "Es ist der zentrale Einstiegspunkt zur Ausführung von Spark-Anwendungen.", "Es ist eine Bibliothek für maschinelles Lernen.", "Es ist der Optimierer für SQL-Abfragen."],
        answer: "Es ist der zentrale Einstiegspunkt zur Ausführung von Spark-Anwendungen."
    },
    {
        question: "Wie wird Datenparallelität in Apache Spark erreicht?",
        options: ["Daten werden auf mehreren Servern gespeichert.", "Daten werden in Partitionen aufgeteilt und parallel verarbeitet.", "Spark nutzt einen einzelnen Server für alle Daten.", "Daten werden sequentiell verarbeitet."],
        answer: "Daten werden in Partitionen aufgeteilt und parallel verarbeitet."
    },
    {
        question: "Was ist eine Transformation, und wie unterscheidet sie sich von einer Aktion?",
        options: ["Transformationen berechnen die Ergebnisse sofort, Aktionen sind verzögert.", "Transformationen sind verzögert, Aktionen führen die Berechnungen aus.", "Transformationen aggregieren Daten, Aktionen teilen sie auf.", "Es gibt keinen Unterschied zwischen Transformationen und Aktionen."],
        answer: "Transformationen sind verzögert, Aktionen führen die Berechnungen aus."
    },
    {
        question: "Wie funktioniert die Lazy Evaluation in Spark, und warum ist sie wichtig?",
        options: ["Daten werden sofort verarbeitet, wenn eine Transformation aufgerufen wird.", "Transformationen werden ausgeführt, sobald die Ergebnisse benötigt werden, um die Effizienz zu erhöhen.", "Lazy Evaluation hat keine Auswirkungen auf Spark.", "Transformationen werden sofort im Speicher berechnet."],
        answer: "Transformationen werden ausgeführt, sobald die Ergebnisse benötigt werden, um die Effizienz zu erhöhen."
    },
    {
        question: "Welche drei Funktionen sind Transformationen?",
        options: ["count(), collect(), saveAsTextFile()", "map(), filter(), withColumn()", "count(), filter(), show()", "saveAsTextFile(), show(), foreach()"],
        answer: "map(), filter(), withColumn()"
    },
    {
        question: "Was ist ein Shuffle, und welche Auswirkungen hat er auf die Performance?",
        options: ["Es handelt sich um eine optimierte Verteilung von Daten.", "Daten werden zwischen Partitionen verschoben, was die Leistung beeinträchtigen kann.", "Es ist eine Technik zur Optimierung der SQL-Abfrageausführung.", "Es hat keinen Einfluss auf die Performance."],
        answer: "Daten werden zwischen Partitionen verschoben, was die Leistung beeinträchtigen kann."
    },
    {
        question: "Was ist PySpark?",
        options: ["PySpark bietet die Verarbeitung von strukturierten und halb strukturierten Daten mit SQL-Abfragen.", "PySpark ist die einzige Möglichkeit, mit Spark zu arbeiten.", "PySpark ermöglicht die Ausführung von Spark-Anwendungen mit Java.", "Spark SQL ist speziell für Echtzeit-Datenverarbeitung."],
        answer: "PySpark bietet die Verarbeitung von strukturierten und halb strukturierten Daten mit SQL-Abfragen."
    },
    {
        question: "Wie können DataFrames mit SQL Abfragen in Spark bearbeitet werden?",
        options: ["Indem DataFrames in Tabellen umgewandelt und SQL Abfragen darauf ausgeführt werden.", "Indem DataFrames mit Python bearbeitet werden.", "Indem SQL-Datenbanken direkt aufgerufen werden.", "DataFrames können nicht mit SQL bearbeitet werden."],
        answer: "Indem DataFrames in Tabellen umgewandelt und SQL Abfragen darauf ausgeführt werden."
    },
    {
        question: "Wie wird MLlib eingesetzt?",
        options: ["MLlib bietet Algorithmen für maschinelles Lernen und kann mit RDDs und DataFrames arbeiten.", "MLlib bietet nur Datenbankoperationen.", "MLlib ist eine Bibliothek für SQL Abfragen.", "MLlib kann nur mit unstrukturierten Daten verwendet werden."],
        answer: "MLlib bietet Algorithmen für maschinelles Lernen und kann mit RDDs und DataFrames arbeiten."
    },
    {
        question: "Wie integriert Spark Streaming Echtzeit-Datenverarbeitung?",
        options: ["Durch die Verarbeitung von DStreams (discretized streams), die Daten in kleinen Batches behandeln.", "Durch die Verwendung von SQL Abfragen in Echtzeit.", "Durch die Verwendung von RDDs ohne Partitionierung.", "Spark Streaming wird nicht für Echtzeit verwendet."],
        answer: "Durch die Verarbeitung von DStreams (discretized streams), die Daten in kleinen Batches behandeln."
    },
    {
        question: "Was ist ein Catalyst Optimizer, und welche Rolle spielt er bei der Abfrageoptimierung?",
        options: ["Das ist eine Abfrageoptimierungs-Engine, die SQL Abfragen und DataFrame-Operationen optimiert.", "Es ist der Hauptprozessor von Spark.", "Es optimiert nur maschinelles Lernen.", "Es führt keine Optimierungen durch."],
        answer: "Das ist eine Abfrageoptimierungs-Engine, die SQL Abfragen und DataFrame-Operationen optimiert."
    }
];

export default questions;
