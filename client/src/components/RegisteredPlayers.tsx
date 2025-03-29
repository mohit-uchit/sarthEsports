import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { PlayerWithRegistrationId } from "../lib/types";
import { CardWithNeon } from "./ui/card-with-neon";
import { getQueryFn } from "../lib/queryClient";
import { Player } from "@shared/schema";
import { FiUser, FiSearch } from "react-icons/fi";
import { FaGamepad } from "react-icons/fa";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";
import { Input } from "@/components/ui/input";

export default function RegisteredPlayers() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const playersPerPage = 10;

  // Fetch registered players
  const { data: players = [], isLoading, isError } = useQuery<Player[]>({
    queryKey: ["/api/players"],
    queryFn: getQueryFn({ on401: "returnNull" }),
  });

  // Filter players based on search query
  const filteredPlayers = players.filter(player => 
    player.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    player.inGameName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    player.uid.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination
  const indexOfLastPlayer = currentPage * playersPerPage;
  const indexOfFirstPlayer = indexOfLastPlayer - playersPerPage;
  const currentPlayers = filteredPlayers.slice(indexOfFirstPlayer, indexOfLastPlayer);
  const totalPages = Math.ceil(filteredPlayers.length / playersPerPage);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section id="registered-players" className="py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-audiowide mb-4 text-white">
            <span className="text-game-blue">Registered</span>{" "}
            <span className="text-game-accent">Players</span>
          </h2>
          <div className="h-1 w-20 bg-game-accent mx-auto mb-6"></div>
          <p className="text-game-text-dim max-w-3xl mx-auto">
            Check out all the players who have registered for the tournament. Total {players.length} out of 48 slots filled.
          </p>
        </motion.div>

        <CardWithNeon className="mb-8">
          <div className="p-4 md:p-6">
            {/* Search and Stats */}
            <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-game-text-dim" />
                <Input
                  type="text"
                  placeholder="Search by name, in-game name or UID..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-black/30 border-game-blue-dim focus:border-game-blue focus:ring-game-blue"
                />
              </div>
              <div className="text-game-text-dim text-sm flex items-center">
                <div className="mr-6">
                  <span className="text-game-blue font-bold">{players.length}</span> Registered
                </div>
                <div>
                  <span className="text-game-accent font-bold">{48 - players.length}</span> Slots Left
                </div>
              </div>
            </div>

            {/* Players Table */}
            {isLoading ? (
              <div className="text-center py-12">
                <div className="inline-block w-8 h-8 border-2 border-game-blue border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-4 text-game-text-dim">Loading players data...</p>
              </div>
            ) : isError ? (
              <div className="text-center py-12 text-game-error">
                <p>Error loading players data. Please try again later.</p>
              </div>
            ) : filteredPlayers.length === 0 ? (
              <div className="text-center py-12 text-game-text-dim">
                <FiUser className="mx-auto mb-4 text-5xl opacity-30" />
                {players.length === 0 ? (
                  <p>No players have registered yet.</p>
                ) : (
                  <p>No players matching your search criteria.</p>
                )}
              </div>
            ) : (
              <>
                <div className="overflow-x-auto">
                  <Table className="w-full">
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-16 text-center">#</TableHead>
                        <TableHead>Full Name</TableHead>
                        <TableHead>In-Game Name</TableHead>
                        <TableHead>UID</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {currentPlayers.map((player, index) => (
                        <TableRow 
                          key={player.id} 
                          className="hover:bg-game-blue-dim/20 transition-colors"
                        >
                          <TableCell className="font-bold text-center">
                            {indexOfFirstPlayer + index + 1}
                          </TableCell>
                          <TableCell className="flex items-center gap-2">
                            <FiUser className="text-game-blue" />
                            {player.fullName}
                          </TableCell>
                          <TableCell className="flex items-center gap-2">
                            <FaGamepad className="text-game-accent" />
                            {player.inGameName}
                          </TableCell>
                          <TableCell className="font-mono text-sm">
                            {player.uid}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-6">
                    <Pagination>
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious 
                            onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                            className={currentPage === 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
                          />
                        </PaginationItem>
                        
                        {[...Array(totalPages)].map((_, i) => (
                          <PaginationItem key={i}>
                            <button
                              onClick={() => handlePageChange(i + 1)}
                              className={`w-10 h-10 flex items-center justify-center rounded-md ${
                                currentPage === i + 1
                                  ? "bg-game-accent text-white"
                                  : "text-game-text-dim hover:bg-game-blue-dim/20"
                              }`}
                            >
                              {i + 1}
                            </button>
                          </PaginationItem>
                        ))}
                        
                        <PaginationItem>
                          <PaginationNext
                            onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                            className={currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
                          />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </div>
                )}
              </>
            )}
          </div>
        </CardWithNeon>
      </div>
    </section>
  );
}