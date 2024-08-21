<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tickets', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('origin_id')->constrained('airports');
            $table->foreignUuid('destination_id')->constrained('airports');
            $table->foreignUuid('flight_id')->constrained();
            $table->date('date');
            $table->decimal('fee');
            $table->integer('number_of_seat');
            $table->integer('available_seat');
            $table->time('departure_time');
            $table->time('arrival_time');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tickets');
    }
};
